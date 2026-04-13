// Helper function to fetch Bandcamp track/album ID
async function getBandcampEmbed(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    // Extract track ID from the page
    const trackMatch = html.match(
      /<meta property="twitter:player" content="([^\"]+)">/,
    );
    if (trackMatch && trackMatch[1]) {
      return trackMatch[1];
    } else {
      console.error("html did not match player");
    }
    return null;
  } catch (error) {
    console.error("Error fetching Bandcamp ID:", error);
    return null;
  }
}

// Helper function to generate embed URL based on platform
async function getEmbedUrl(
  url: string,
): Promise<{ embedUrl: string; platform: string } | null> {
  try {
    const urlObj = new URL(url);

    // YouTube detection
    if (
      urlObj.hostname.includes("youtube.com") ||
      urlObj.hostname.includes("youtu.be")
    ) {
      let videoId = "";

      if (urlObj.hostname.includes("youtu.be")) {
        // Short URL format: https://youtu.be/VIDEO_ID
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.searchParams.has("v")) {
        // Regular URL: https://www.youtube.com/watch?v=VIDEO_ID
        videoId = urlObj.searchParams.get("v") || "";
      } else if (urlObj.pathname.includes("/embed/")) {
        // Already an embed URL
        videoId = urlObj.pathname.split("/embed/")[1] || "";
      }

      if (videoId) {
        return {
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
          platform: "youtube",
        };
      }
    }

    // SoundCloud detection
    if (urlObj.hostname.includes("soundcloud.com")) {
      return {
        embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`,
        platform: "soundcloud",
      };
    }

    // Bandcamp detection
    if (urlObj.hostname.includes("bandcamp.com")) {
      const embedUrl = await getBandcampEmbed(url);
      if (embedUrl) {
        // Fetch the actual track/album ID from the Bandcamp page
        return {
          embedUrl,
          platform: "bandcamp",
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
}
