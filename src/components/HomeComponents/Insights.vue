<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
    ]">
        <div class="max-w-7xl mx-auto">
            <!-- Header Section -->
            <div class="blog-header-row">
                <div class="tech-header blog-header">
                    <span :class="['tech-eyebrow', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                        From the Blog
                    </span>
                    <h2 :class="['tech-heading', isDarkMode ? 'text-white' : 'text-black']">
                        Latest insights
                    </h2>
                    <p :class="['tech-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                        Practical guides and lessons pulled straight from our own production work.
                    </p>
                </div>

                <router-link to="/blog" :class="['view-all-link', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                    View all articles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="view-all-arrow" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </router-link>
            </div>

            <!-- Blog Grid (4 per row on desktop) -->
            <div class="blog-grid">
                <article v-for="post in blogPosts" :key="post.title"
                    :class="['blog-card', isDarkMode ? 'blog-card-dark' : 'blog-card-light']">
                    <div class="blog-image-wrap">
                        <img :src="post.image" :alt="post.title" class="blog-image" loading="lazy" />
                        <span :class="['blog-tag', isDarkMode ? 'blog-tag-dark' : 'blog-tag-light']">
                            {{ post.tag }}
                        </span>
                    </div>

                    <div class="blog-content">
                        <h3 :class="['blog-title', isDarkMode ? 'text-white' : 'text-black']">
                            {{ post.title }}
                        </h3>
                        <p :class="['blog-excerpt', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                            {{ post.excerpt }}
                        </p>

                        <router-link :to="post.link"
                            :class="['blog-read-link', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                            Read Article
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="blog-read-arrow"
                                aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </router-link>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const blogPosts = [
    {
        tag: 'Magento',
        title: 'Using Magento in Production',
        excerpt: 'Lessons from running high-traffic Magento storefronts: caching strategy, indexing, and keeping deploys boring.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
        link: '/blog/using-magento-in-production'
    },
    {
        tag: 'NetSuite',
        title: 'Using NetSuite in Production',
        excerpt: 'How we structure NetSuite integrations so inventory, orders, and finance stay in sync without breaking.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
        link: '/blog/using-netsuite-in-production'
    },
    {
        tag: 'Next.js',
        title: 'Using Next.js in Production',
        excerpt: 'Rendering strategy, caching, and deployment patterns that keep Next.js apps fast at scale.',
        image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80&auto=format&fit=crop',
        link: '/blog/using-nextjs-in-production'
    },
    {
        tag: 'Shopify',
        title: 'Using Shopify in Production',
        excerpt: 'Theme architecture, app choices, and checkout customizations that hold up as order volume grows.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80&auto=format&fit=crop',
        link: '/blog/using-shopify-in-production'
    }
]
</script>

<style scoped>
.tech-header {
    max-width: 720px;
    text-align: left;
}

.tech-eyebrow {
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
}

.tech-heading {
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
}

.tech-paragraph {
    font-size: clamp(0.95rem, 1.4vw, 1.1rem);
    line-height: 1.6;
    max-width: 560px;
}

.blog-header-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 56px;
}

.blog-header {
    margin-bottom: 0;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    padding-bottom: 4px;
    transition: gap 0.2s ease, opacity 0.2s ease;
}

.view-all-link:hover {
    gap: 10px;
    opacity: 0.85;
}

.view-all-arrow {
    transition: transform 0.2s ease;
}

@media (max-width: 640px) {
    .blog-header-row {
        flex-direction: column;
        align-items: flex-start;
    }
}

/* Grid layout: 4 columns in a single row on desktop */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}

@media (max-width: 1024px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .blog-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}

.blog-card {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.blog-card-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
}

.blog-card-dark:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.035);
}

.blog-card-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
}

.blog-card-light:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18);
    background-color: #ffffff;
}

.blog-image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}

.blog-card:hover .blog-image {
    transform: scale(1.06);
}

.blog-tag {
    position: absolute;
    top: 14px;
    left: 14px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 5px 10px;
    border-radius: 999px;
    backdrop-filter: blur(6px);
}

.blog-tag-dark {
    background-color: rgba(0, 0, 0, 0.55);
    color: #00ffa3;
    border: 1px solid rgba(0, 255, 163, 0.3);
}

.blog-tag-light {
    background-color: rgba(255, 255, 255, 0.85);
    color: #f97316;
    border: 1px solid rgba(249, 115, 22, 0.3);
}

.blog-content {
    display: flex;
    flex-direction: column;
    padding: 22px 20px 24px;
    flex-grow: 1;
}

.blog-title {
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin-bottom: 10px;
}

.blog-excerpt {
    font-size: 0.88rem;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 20px;
}

.blog-read-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
}

.blog-read-arrow {
    transition: transform 0.2s ease;
}

.blog-read-link:hover .blog-read-arrow {
    transform: translateX(3px);
}
</style>