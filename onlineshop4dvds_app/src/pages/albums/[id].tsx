import AlbumViewInfo from '@/components/albums/album-view-info';
import PageLayout from '@/components/layouts/page-layout';
import { API_URL } from '@/config';
import { AlbumProductDetail } from '@/models/product-detail';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  // Fetch data from external API
  try {
    const res = await fetch(`${API_URL}/products/${id}`);
    const albumProductDetail: AlbumProductDetail = await res.json();

    // Pass data to the page via props
    return {props: {albumProductDetail}}
  } catch(err) {
    console.error(err);
  }
});

export default function AlbumPage({albumProductDetail}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <PageLayout>
        <div className="flex items-center justify-center p-4">
            <AlbumViewInfo album={albumProductDetail}  />
        </div>
    </PageLayout>
  );
}