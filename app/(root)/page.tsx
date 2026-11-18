import React from 'react'
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import {getAllBooks} from "@/lib/actions/book.actions";
import Search from "@/components/Search";
import {BookOpen} from "lucide-react";
import Link from "next/link";

const Page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
    const { query } = await searchParams;

    const bookResults = await getAllBooks(query)
    const books = bookResults.success ? bookResults.data ?? [] : []

    return (
        <main className="wrapper container">
            <HeroSection />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#ffff]">Recent Books</h2>
                <Search />
            </div>

            {books.length > 0 ? (
                <div className="library-books-grid">
                    {books.map((book) => (
                        <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
                    ))}
                </div>
            ) : bookResults.success ? (
                <div className="library-empty-card">
                    <BookOpen aria-hidden="true" className="size-10 text-[var(--accent-warm)]" />
                    <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                        {query ? 'No books found' : 'Your library is ready'}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {query
                            ? 'Try another title or author, or add a new book to your collection.'
                            : 'Add your first book and start a voice conversation with it.'}
                    </p>
                    {!query && (
                        <Link href="/books/new" className="btn-primary mt-6">
                            Add your first book
                        </Link>
                    )}
                </div>
            ) : null}
        </main>
    )
}

export default Page
