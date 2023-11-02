import { Tabs } from '@/components/tabs'

export default function Home() {
  const items = [
    {
      trigger: 'prvi',
      id: 'prvi',
      content: 'bok ja sam tab 1',
    },
    {
      trigger: 'drugi',
      id: 'drugi',
      content: 'bok ja sam tab 2',
    },
    {
      trigger: 'treci',
      id: 'treci',
      content: 'bok ja sam tab 3',
    },
    {
      trigger: 'cetvrti',
      id: 'cetvrti',
      content: 'bok ja sam tab 4',
    },
  ]

  return (
    <div className="mt-6 w-fit mx-auto">
      <Tabs variant="card" orientation="horizontal" color="destructive" items={items} />
    </div>
  )
}
