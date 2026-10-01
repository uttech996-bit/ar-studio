import ApiKeyUpdateForm from '../../ApiKeyUpdateForm';
import { Badge, Card, PageHeader } from '@/components/ui';

export default async function AdminApiKeyPage() {
  // Status only — the key itself is never read into a renderable value.
  const configured = !!process.env.YOUTUBE_API_KEY?.trim();

  return (
    <main>
      <PageHeader
        title="YouTube API key"
        description="The admin-only key used for channel stats auto-sync. It is stored as a server env var and never shown here."
      />

      <Card className="mt-6">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Current status</p>
        <p className="mt-2">
          <Badge tone={configured ? 'success' : 'danger'}>
            <span
              className={`mr-1.5 inline-block h-2 w-2 rounded-full ${configured ? 'bg-green-500' : 'bg-red-500'}`}
            />
            {configured ? 'Configured' : 'Not configured'}
          </Badge>
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Auto-sync and manual sync stay disabled until a valid key is set.
        </p>
      </Card>

      <Card className="mt-6">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Update key</h2>
        <p className="mt-1 text-sm text-neutral-500">
          The new key is validated against the YouTube API first, then written
          to the Vercel project env. Redeploy the project afterwards for it to
          take effect.
        </p>
        <ApiKeyUpdateForm />
      </Card>
    </main>
  );
}
