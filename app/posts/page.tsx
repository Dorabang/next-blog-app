import axios from 'axios';
import Link from 'next/link';

async function getPosts() {
  const res = await axios.get(
    'http://127.0.0.1:8090/api/collections/posts/records',
    { headers: { 'cache-control': 'no-store' } }
  );
  // console.log(res);
  return res?.data?.items as PostItemType[];
}

interface PostItemType {
  id: string;
  title: string;
  created: number;
  content: string;
}

const PostItem = ({ post }: { post: PostItemType }) => {
  const { id, title, created, content } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <h3>{title}</h3>
      <p>{created}</p>
      <p>{content.substring(0, 31)}...</p>
    </Link>
  );
};

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h2>Posts</h2>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
