import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
    try {
        const res = await fetch("https://www.eyefootball.com/rss_news_main.xml");
        const xml = await res.text();

        const parser = new XMLParser({
            ignoreAttributes: true,
            trimValues: true,
        });

        const json = parser.parse(xml);

        const items = json?.rss?.channel?.item || [];

        const news = Array.isArray(items) ? items : [items];

        const mapped = news.map((item: any) => ({
            title: item.title || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
        }));

        return NextResponse.json(mapped);
    } catch (error: any) {
        console.error("RSS Parse Error:", error);
        return NextResponse.json([]);
    }
}
