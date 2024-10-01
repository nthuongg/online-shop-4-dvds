import PageLayout from '@/components/layouts/page-layout';
import MovieViewInfo from '@/components/movies/movie-view-info';
import { API_URL } from '@/config';
import { MovieProductDetail } from '@/models/product-detail';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  // Fetch data from external API
  try {
    const res = await fetch(`${API_URL}/products/${id}`);
    const movieProductDetail: MovieProductDetail = await res.json();

    // Pass data to the page via props
    return {props: {movieProductDetail}}
  } catch(err) {
    console.error(err);
  }
});

export default function MoviePage({movieProductDetail}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <PageLayout>
        <div className="flex items-center justify-center p-4">
            <MovieViewInfo movie={movieProductDetail}  />
        </div>
    </PageLayout>
  );
}