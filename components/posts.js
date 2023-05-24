import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.eachPost} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        
                            <figure style={{ position: 'relative', width: '100%', height: '150px' }}>
                                <Image
                                  src={eyecatch.url}
                                  alt=""
                                  fill
                                  style={{
                                    objectFit: 'cover', 
                                  }}
                                  sizes="(min-width: 1152px) 576px, 50vw"
                                //   style={{width: '100%', height: 'auto'}}
                                  placeholder="blur"
                                  blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                            <h2>{title}</h2>
                        
                    </Link>
                </article>
            ))}
        </div>
    )
}