import Link from "next/link";
import {BookCardProps} from "@/types";
// import Image from "next/image";

const BookCard = ({ title, author, coverURL, slug }: BookCardProps) => {
    return (
        <Link href={`/books/${slug}`}>
            <article className="book-card">
                <figure className="book-card-figure">
                    <div className="book-card-cover-wrapper">
                        <img src={coverURL} alt={title} className="book-card-cover"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <figcaption className="book-card-meta">
                        <h3 className="book-card-title">{title}</h3>
                        <p className="book-card-author">{author}</p>
                    </figcaption>
                </figure>
            </article>
        </Link>
    )
}
export default BookCard
