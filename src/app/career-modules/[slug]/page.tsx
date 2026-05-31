import { redirect } from 'next/navigation';

interface CareerModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CareerModulePage({ params }: CareerModulePageProps) {
  const { slug } = await params;
  redirect(`/assignments/${slug}`);
}
