'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import FormattedBibTeXText from '@/components/publications/FormattedBibTeXText';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
}

export default function SelectedPublications({ publications, title }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <Link href="/publications" className="shrink-0 text-sm font-medium text-accent hover:underline underline-offset-4">
                    {messages.home.viewAll} <span aria-hidden="true">→</span>
                </Link>
            </div>
            <div className="space-y-5">
                {publications.map((pub, index) => (
                    <motion.article
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(0.05 * index, 0.3) }}
                        className="flex flex-col sm:flex-row gap-5 xl:gap-6 p-5 rounded-xl border border-neutral-200 bg-background hover:border-accent/40 transition-colors duration-200"
                    >
                        {pub.preview && (
                            <div className="w-full sm:w-48 xl:w-60 shrink-0">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-white">
                                    <Image
                                        src={`/papers/${pub.preview}`}
                                        alt={pub.title}
                                        fill
                                        sizes="(min-width: 1280px) 240px, (min-width: 640px) 192px, calc(100vw - 80px)"
                                        className="object-contain p-2"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="min-w-0 flex-1 self-center">
                            <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">
                                <FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} />
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                                {pub.authors.map((author, idx) => (
                                    <span key={idx}>
                                        <span className={author.isHighlighted ? 'font-semibold text-accent' : ''}>
                                            {author.name}
                                            {author.isCoAuthor && <sup>*</sup>}
                                            {author.isCorresponding && <sup>†</sup>}
                                        </span>
                                        {idx < pub.authors.length - 1 && ', '}
                                    </span>
                                ))}
                            </p>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                {pub.journal || pub.conference}{' '}
                                <span className="font-semibold text-red-600 dark:text-red-400">
                                    （CCF A）
                                </span>
                                {' · '}{pub.year}
                            </p>
                            {pub.description && (
                                <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                                    {pub.description}
                                </p>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}
