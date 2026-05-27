import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/membership')({
  component: Membership,
})

function Membership() {
  return (
    <div className="p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Membership Experiences Designed Around Restoration</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Wellness is a journey built through consistency, intentional habits, emotional awareness, restorative experiences, and supportive environments. Our membership experiences are designed to help individuals create calming daily wellness rituals that support emotional balance, restorative sleep, breath awareness, nervous-system calm, and lifestyle transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Calm Membership</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Guided meditations</li>
            <li>Breathwork sessions</li>
            <li>Sound immersion access</li>
            <li>Wellness education</li>
            <li>Relaxation audio library</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Restore Membership</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Monthly wellness product access</li>
            <li>Aroma blends</li>
            <li>Immersive simulation sessions</li>
            <li>Wellness tracking</li>
            <li>Guided restorative experiences</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Regenerate Membership</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Premium immersive wellness experiences</li>
            <li>Personalized recommendations</li>
            <li>Advanced wellness journeys</li>
            <li>Product bundles</li>
            <li>Integrative consultation access</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
