import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code, Bookmark, BookmarkCheck, Copy, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { courses } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressContext';
import { useAuth } from '../../contexts/AuthContext';
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contentSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const playgroundVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const actionsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
};

const CopyToClipboardButton: React.FC<{ code: string }> = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="p-1.5 sm:p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200 group"
            title="Copy code to clipboard"
            aria-label="Copy code to clipboard"
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-400" />
            ) : (
                <Copy className="w-4 h-4 group-hover:text-white" />
            )}
        </button>
    );
};

const CodeBlock: React.FC<{ node: any; inline: boolean; className: string; children: React.ReactNode }> = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    const lang = match ? match[1] : 'text';
    const codeContent = String(children).replace(/\n$/, '');

    const codeStyle = useMemo(() => {
        let style = { height: 'auto' };
        if (lang === 'javascript' || lang === 'js' || lang === 'jsx' || lang === 'ts' || lang === 'tsx') {
            style.backgroundColor = '#282c34'; // Dark blue-ish for JS
        } else if (lang === 'html') {
            style.backgroundColor = '#333b4a'; // Slightly different dark for HTML
        } else if (lang === 'css') {
            style.backgroundColor = '#1a1b26'; // Even darker for CSS
        }
        return style;
    }, [lang]);

    return !inline && match ? (
        <div className="relative rounded-md my-4 shadow-md overflow-hidden" style={codeStyle}>
            <div className="flex justify-end p-2 bg-gray-700 bg-opacity-60 absolute top-0 right-0 w-full z-10">
                <span className="text-sm text-gray-400 mr-auto ml-2 font-mono uppercase">{lang}</span>
                <CopyToClipboardButton code={codeContent} />
            </div>
            <SyntaxHighlighter
                style={vscDarkPlus}
                language={lang}
                PreTag="div"
                showLineNumbers
                customStyle={{
                    paddingTop: '2.5rem', // Make space for the header
                    margin: 0,
                    borderRadius: '0 0 0.375rem 0.375rem', // Match parent border-radius
                    height: 'auto', // Ensure height adjusts to content
                    backgroundColor: codeStyle.backgroundColor, // Apply the specific background color
                }}
                codeTagProps={{
                    style: {
                        fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        fontSize: '0.875rem',
                    }
                }}
                {...props}
            >
                {codeContent}
            </SyntaxHighlighter>
        </div>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code: CodeBlock,
                img: ({ node, ...props }) => <img {...props} style={{ height: 'auto', maxWidth: '100%' }} />,
                a: ({ node, ...props }) => <a {...props} style={{ height: 'auto' }} />,
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

const LessonView: React.FC = () => {
    const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
    const { markLessonComplete, userProgress } = useProgress();
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [isBookmarked, setIsBookmarked] = useState(false);

    const course = useMemo(() => courses.find(c => c.id === courseId), [courseId]);
    const lesson = useMemo(() => {
        if (!course) return undefined;
        for (const sec of course.sections) {
            const foundLesson = sec.lessons.find(l => l.id === lessonId);
            if (foundLesson) {
                return foundLesson;
            }
        }
        return undefined;
    }, [course, lessonId]);

    const section = useMemo(() => course?.sections.find(s => s.lessons.some(l => l.id === lessonId)), [course, lessonId]);

    const isCompleted = useMemo(() => userProgress?.courses[courseId!]?.lessons[lessonId!]?.completed || false, [userProgress, courseId, lessonId]);

    const findNextLesson = useCallback(() => {
        if (!course) return null;
        const allLessons = course.sections.flatMap(s => s.lessons);
        const currentIndex = allLessons.findIndex(l => l.id === lessonId);
        return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
    }, [course, lessonId]);

    const nextLesson = findNextLesson();
    const supportsPlayground = useMemo(() => ['javascript', 'html', 'css', 'dsa', 'react'].includes(courseId!), [courseId]);
    const playgroundType = useMemo(() => ['html', 'css', 'javascript'].includes(courseId!) ? 'web' : 'react', [courseId]);

    const trackRecentLesson = useCallback(async () => {
        if (!currentUser || !courseId || !lessonId) return;
        try {
            const userDocRef = doc(db, 'users', currentUser.uid);
            const userDoc = await getDoc(userDocRef);

            const recentLessonData = {
                lessonId,
                courseId,
                viewedAt: new Date(),
            };

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const recentLessons = userData.recentLessons || [];

                const filteredLessons = recentLessons.filter(
                    (lessonItem: any) => !(lessonItem.lessonId === lessonId && lessonItem.courseId === courseId)
                );

                const updatedLessons = [recentLessonData, ...filteredLessons].slice(0, 10);
                await updateDoc(userDocRef, { recentLessons: updatedLessons });
            } else {
                await setDoc(userDocRef, { recentLessons: [recentLessonData] });
            }
        } catch (error) {
            console.error('Error tracking recent lesson:', error);
        }
    }, [currentUser, courseId, lessonId]);

    const checkBookmarkStatus = useCallback(async () => {
        if (!currentUser || !courseId || !lessonId) return;
        try {
            const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId);
            const bookmarksDoc = await getDoc(bookmarksRef);
            setIsBookmarked(bookmarksDoc.exists() && bookmarksDoc.data()?.lessons?.includes(lessonId));
        } catch (error) {
            console.error('Error checking bookmark status:', error);
        }
    }, [currentUser, courseId, lessonId]);

    const toggleBookmark = useCallback(async () => {
        if (!currentUser || !courseId || !lessonId) return;
        try {
            const bookmarksRef = doc(db, 'users', currentUser.uid, 'bookmarks', courseId);
            if (isBookmarked) {
                await updateDoc(bookmarksRef, { lessons: arrayRemove(lessonId) });
                setIsBookmarked(false);
            } else {
                const bookmarksDoc = await getDoc(bookmarksRef);
                if (bookmarksDoc.exists()) {
                    await updateDoc(bookmarksRef, { lessons: arrayUnion(lessonId) });
                } else {
                    await setDoc(bookmarksRef, { lessons: [lessonId] });
                }
                setIsBookmarked(true);
            }
        } catch (error) {
            console.error('Error toggling bookmark:', error);
        }
    }, [currentUser, courseId, lessonId, isBookmarked]);

    const handleMarkComplete = useCallback(async () => {
        await markLessonComplete(courseId!, lessonId!);
    }, [markLessonComplete, courseId, lessonId]);

    useEffect(() => {
        if (currentUser && courseId && lessonId) {
            trackRecentLesson();
            checkBookmarkStatus();
        }
    }, [currentUser, courseId, lessonId, trackRecentLesson, checkBookmarkStatus]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lessonId]);

    if (!course || !section || !lesson) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Lesson Not Found
                    </motion.h1>
                    <Link to="/courses" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <Link
                        to={`/courses/${courseId}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors text-sm sm:text-base"
                        aria-label={`Back to ${course.title}`}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to <span className="hidden sm:inline-block pl-1"> {course.title}</span><span className="sm:hidden"> Course</span>
                    </Link>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1">
                                <motion.h1
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                                >
                                    {lesson.title}
                                </motion.h1>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-400"
                                >
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{lesson.duration}</span>
                                    <span className="mx-2">•</span>
                                    <span>{section.title}</span>
                                </motion.div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={toggleBookmark}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        isBookmarked
                                            ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 scale-110'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                    aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
                                >
                                    {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                                </button>

                                <AnimatePresence mode="wait">
                                    {isCompleted && (
                                        <motion.div
                                            key="completed-status"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center text-green-600 dark:text-green-400 text-sm sm:text-base font-medium"
                                        >
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
                                            <span>Completed</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={contentSectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8"
                >
                    <div className="p-6 sm:p-8 prose dark:prose-invert max-w-none">
                        <MarkdownRenderer markdown={lesson.markdownContent || ''} />
                    </div>
                </motion.div>

                {supportsPlayground && (
                    <motion.div
                        variants={playgroundVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 mb-8 border border-blue-200 dark:border-blue-800"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Practice What You've Learned
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                    Try out the concepts from this lesson in an interactive playground or CodeSandbox.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                                <Link
                                    to={`/playgrounds/${playgroundType}/new`}
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors justify-center text-sm sm:text-base shadow-md"
                                    aria-label="Try in Playground"
                                >
                                    <Code className="w-4 h-4 mr-2" />
                                    Try in Playground
                                </Link>
                                <a
                                    href="https://codesandbox.io/s/new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors justify-center text-sm sm:text-base shadow-md"
                                    aria-label="Open in CodeSandbox"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Open in CodeSandbox
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}

                <motion.div
                    variants={actionsVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <div>
                        <AnimatePresence mode="wait">
                            {!isCompleted && (
                                <motion.button
                                    key="mark-complete-button"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={handleMarkComplete}
                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                                    aria-label="Mark lesson as complete"
                                >
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Mark as Complete
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        {nextLesson && (
                            <Link
                                to={`/courses/${courseId}/lessons/${nextLesson.id}`}
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                                aria-label={`Go to next lesson: ${nextLesson.title}`}
                            >
                                Next Lesson
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        )}

                        {section.quiz && (
                            <Link
                                to={`/courses/${courseId}/quiz/${section.quiz.id}`}
                                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto justify-center shadow-lg text-base"
                                aria-label={`Take quiz for ${section.title}`}
                            >
                                Take Quiz
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LessonView;