import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
