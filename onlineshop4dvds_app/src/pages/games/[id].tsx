import PageLayout from '@/components/layouts/page-layout';
import GameViewInfo from '@/components/games/game-view-info';
import { API_URL } from '@/config';
import { GameProductDetail } from '@/models/product-detail';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  // Fetch data from external API
  try {
    const res = await fetch(`${API_URL}/products/${id}`);
    const gameProductDetail: GameProductDetail = await res.json();

    // Pass data to the page via props
    return {props: {gameProductDetail}}
  } catch(err) {
    console.error(err);
  }
});

export default function GamePage({gameProductDetail}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <PageLayout>
        <div className="flex items-center justify-center p-4">
            <GameViewInfo game={gameProductDetail}  />
        </div>
    </PageLayout>
  );
}