import { createFileRoute } from '@tanstack/react-router'
import { about } from '../pages/init/about'

export const Route = createFileRoute('/about')({
  component: about
})