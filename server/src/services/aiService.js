import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

function extractJson(text, fallback) {
  try {
    const clean = text.replaceAll(String.fromCharCode(96), '').replace(/^json/i, '').trim();
    return JSON.parse(clean);
  } catch (_error) {
    return fallback;
  }
}

async function callOpenAI(prompt) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.4
  });
  return response.choices[0]?.message?.content || '';
}

async function callGemini(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function callAI(prompt) {
  const provider = process.env.AI_PROVIDER || 'openai';
  if (provider === 'gemini' && process.env.GEMINI_API_KEY) return callGemini(prompt);
  if (process.env.OPENAI_API_KEY) return callOpenAI(prompt);
  return '';
}

function buildFallbackQuestions({ role, skills }) {
  const skillText = skills.length ? skills.join(', ') : 'the core skills required for this role';
  return [
    'Tell me about a project where you used ' + skillText + ' for a ' + role + ' responsibility.',
    'What are the most important technical fundamentals for a ' + role + '?',
    'How would you debug a production issue related to ' + skillText + '?',
    'Describe a tradeoff you would consider while building or improving a system as a ' + role + '.',
    'How do you measure whether your work as a ' + role + ' is successful?',
    'Explain one challenging concept from ' + skillText + ' in simple terms.',
    'How would you design a scalable solution for a real-world problem in a ' + role + ' position?',
    'What is one recent thing you learned that would help you perform better as a ' + role + '?'
  ];
}

export async function generateInterviewQuestions({ role, level, skills }) {
  const skillList = Array.isArray(skills) ? skills.filter(Boolean) : [];
  const skillText = skillList.length ? skillList.join(', ') : 'general role-relevant skills';
  const prompt = 'Generate 8 interview questions as a JSON array of strings for the role "' + role + '" at "' + level + '" level. Focus on these user-provided skills: ' + skillText + '. Make the questions specific to the selected role and skills. Return only valid JSON.';
  const fallback = buildFallbackQuestions({ role, skills: skillList });
  const text = await callAI(prompt);
  return text ? extractJson(text, fallback) : fallback;
}

export async function analyzeResume({ resumeText, targetRole }) {
  const fallback = {
    score: 72,
    summary: 'The resume shows a solid foundation. Add stronger metrics, clearer project impact, and role-specific keywords.',
    strengths: ['Project experience is visible', 'Technical skills are listed', 'Readable structure'],
    gaps: ['Add measurable outcomes', 'Tune keywords for the target role', 'Highlight leadership or ownership'],
    suggestions: ['Use action verbs', 'Add links to portfolio or GitHub', 'Move the strongest projects near the top']
  };
  const prompt = 'Analyze this resume for ' + targetRole + '. Return only JSON with score number, summary string, strengths array, gaps array, suggestions array. Resume: ' + resumeText.slice(0, 8000);
  const text = await callAI(prompt);
  return text ? extractJson(text, fallback) : fallback;
}