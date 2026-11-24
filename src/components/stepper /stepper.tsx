import { User } from "lucide-react";
import { Lock } from "lucide-react";
import { Camera } from "lucide-react";

export const STEPS = [
  { label: "Personal info", icon: User },
  { label: "Security", icon: Lock },
  { label: "Profile", icon: Camera },
] as const;

export const copy = {
  0: {
    title: "Let's start with you.",
    description: "A few details to make this space your own.",
  },
  1: {
    title: "Keep it just yours.",
    description: "A strong password for everything that's ahead.",
  },
  2: {
    title: "Make yourself at home.",
    description: "The finishing touches. A little personality goes a long way.",
  },
};