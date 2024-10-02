import NotAuthorized from '../Components/NotAuthorized';
import { useAuth } from '../hooks/AuthProvider';

function NewBlogPostPage() {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  return (
    <div>
      <p>Hello, let's write a blog post today 😃</p>
    </div>
  );
}

export default NewBlogPostPage;
