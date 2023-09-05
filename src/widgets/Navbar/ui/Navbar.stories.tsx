import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark: Story = {};
