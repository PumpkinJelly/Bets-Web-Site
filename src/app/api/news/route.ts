import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

interface StructuredNewsItem {
    title: string;
    description: string;
    link: string;
    pubDate: string;
}

const RSS_URL = "https://www.eyefootball.com/rss_news_main.xml";

export async function GET() {
    try {
        const rssResponse = await fetch(RSS_URL, {
            cache: "no-store",
        });

        if (!rssResponse.ok) {
            console.error("Failed to fetch RSS feed:", rssResponse.statusText);
            return NextResponse.json({ error: `Failed to fetch RSS feed: ${rssResponse.statusText}` }, { status: rssResponse.status });
        }

        const xml = await rssResponse.text();

        const parser = new XMLParser({
            ignoreAttributes: true,
            trimValues: true,
            tagValueProcessor: (tagName, tagValue) => {
                if (tagName === 'description') {
                    return tagValue;
                }
                return tagValue;
            }
        });

        const json = parser.parse(xml);

        const items = json?.rss?.channel?.item || [];

        const news = Array.isArray(items) ? items : [items];

        const mapped: StructuredNewsItem[] = news.map((item: any) => ({
            title: item.title || "Название отсутствует",
            link: item.link || "#",
            description: item.description || "",
            pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('ru-RU', {
                year: 'numeric', month: 'short', day: 'numeric'
            }) : "N/A",
        }));

        return NextResponse.json(mapped);

    } catch (error: any) {
        console.error("RSS Fetch or Parse Error:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}