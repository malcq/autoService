import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark: Story = {};
