import { Column, Flex, Heading, Text, Button, Tag, RevealFx } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { blog, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <Column gap="m">
        <Heading variant="display-strong-l">{blog.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Profiles, ratings, and competitive highlights across platforms
        </Text>
      </Column>

      <Column fillWidth gap="24">
        {blog.profiles?.map((profile: any, index: number) => (
          <RevealFx key={profile.platform} translateY="8" delay={index * 0.15}>
            <Flex
              fillWidth
              border="neutral-medium"
              radius="l"
              overflow="hidden"
              style={{ position: "relative" }}
            >
              {/* Colored accent bar on the left */}
              <Flex
                style={{
                  width: "6px",
                  minHeight: "100%",
                  background: profile.color,
                  flexShrink: 0,
                }}
              />

              <Column fillWidth padding="l" gap="m">
                {/* Top row: symbol + platform name + rank tag */}
                <Flex fillWidth horizontal="space-between" vertical="center" wrap>
                  <Flex gap="12" vertical="center">
                    <Flex
                      horizontal="center"
                      vertical="center"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `${profile.color}20`,
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {profile.symbol}
                    </Flex>
                    <Column gap="2">
                      <Text variant="heading-strong-l">{profile.platform}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        @{profile.handle}
                      </Text>
                    </Column>
                  </Flex>
                  <Tag
                    size="l"
                    style={{
                      background: `${profile.color}25`,
                      color: profile.color,
                      border: `1px solid ${profile.color}40`,
                    }}
                  >
                    {profile.rank}
                  </Tag>
                </Flex>

                {/* Rating + Highlight row */}
                <Flex fillWidth gap="20" mobileDirection="column" vertical="end">
                  <Column gap="4" flex={1}>
                    {profile.maxRating && (
                      <Flex gap="8" vertical="end">
                        <Text
                          variant="display-strong-l"
                          style={{ color: profile.color }}
                        >
                          {profile.maxRating}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          max rating
                        </Text>
                      </Flex>
                    )}
                    <Flex gap="8" vertical="center">
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        style={{
                          borderLeft: `2px solid ${profile.color}60`,
                          paddingLeft: "8px",
                        }}
                      >
                        🏆 {profile.highlight}
                      </Text>
                    </Flex>
                  </Column>

                  <Button
                    href={profile.link}
                    variant="secondary"
                    size="s"
                    arrowIcon
                  >
                    View Profile
                  </Button>
                </Flex>
              </Column>
            </Flex>
          </RevealFx>
        ))}
      </Column>

      {/* Summary stats */}
      <RevealFx translateY="8" delay={0.5}>
        <Flex
          fillWidth
          horizontal="center"
          gap="l"
          padding="l"
          radius="l"
          border="neutral-medium"
          background="surface"
          wrap
        >
          <Column horizontal="center" gap="4">
            <Text variant="display-strong-m" style={{ color: "#FFA116" }}>
              800+
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Problems Solved
            </Text>
          </Column>
          <Flex
            style={{
              width: "1px",
              height: "48px",
              background: "var(--neutral-border-medium)",
            }}
          />
          <Column horizontal="center" gap="4">
            <Text variant="display-strong-m" style={{ color: "#D29E78" }}>
              1694
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              CodeChef Max
            </Text>
          </Column>
          <Flex
            style={{
              width: "1px",
              height: "48px",
              background: "var(--neutral-border-medium)",
            }}
          />
          <Column horizontal="center" gap="4">
            <Text variant="display-strong-m" style={{ color: "#03A89E" }}>
              1404
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              CodeForces Max
            </Text>
          </Column>
          <Flex
            style={{
              width: "1px",
              height: "48px",
              background: "var(--neutral-border-medium)",
            }}
          />
          <Column horizontal="center" gap="4">
            <Text variant="display-strong-m" style={{ color: "#FFA116" }}>
              1640
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              LeetCode Max
            </Text>
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
}
