import { json } from "zod";
import { draft } from "../../schema/draft.schema";
const STORAG_KEY = "draft";

export const loadDraft = () => {
  const values = localStorage.getItem(STORAG_KEY);
  if (!values) return null;
  const parse = draft.parse(JSON.parse(values));
  return parse;
};

export const saveDraft = (step: number, value: RegistrationFieldProps) => {
  localStorage.setItem(STORAG_KEY, JSON.stringify({ step, value }));
};

export const deleteDraft = () => {};
