import { Grid, Card, CardContent, Typography, Container } from "@mui/material";

const posts = [
  { id: 1, title: "First Post", body: "Hello world!" },
  { id: 2, title: "Second Post", body: "React is great." },
  { id: 3, title: "Third Post", body: "MUI makes styling easy." },
];

export default function PostList() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Posts</Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}