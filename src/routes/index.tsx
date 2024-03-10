import { createFileRoute } from '@tanstack/react-router'
import { init } from '../pages/init/init'

export const Route = createFileRoute('/')({
  component: init
})