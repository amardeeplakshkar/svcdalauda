"use client";

import { Label } from '@/components/ui/label';
import { MdSend } from 'react-icons/md';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm({ content }: { content: any }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="block text-sm font-semibold mb-2">{content.form.fields.fullName.label}</Label>
          <Input
            className="w-full px-4 py-3 rounded border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all"
            id="full-name"
            name="name"
            placeholder={content.form.fields.fullName.placeholder.value}
            type="text"
            required
          />
        </div>
        <div>
          <Label className="block text-sm font-semibold mb-2">{content.form.fields.email.label}</Label>
          <Input
            className="w-full px-4 py-3 rounded border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all"
            id="email"
            name="email"
            placeholder={content.form.fields.email.placeholder.value}
            type="email"
            required
          />
        </div>
      </div>

      <div>
        <Label className="block text-sm font-semibold mb-2">{content.form.fields.subject.label}</Label>
        <Select
          name="subject.value"
          defaultValue="generalInquiry"
          required
        >
          <SelectTrigger className='w-full px-4 py-3 rounded border-gray-600 dark:bg-gray-700 transition-all'>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="generalInquiry">{content.form.fields.subject.options.generalInquiry}</SelectItem>
            <SelectItem value="admissions">{content.form.fields.subject.options.admissions}</SelectItem>
            <SelectItem value="academicCalendar">{content.form.fields.subject.options.academicCalendar}</SelectItem>
            <SelectItem value="departmentDetails">{content.form.fields.subject.options.departmentDetails}</SelectItem>
            <SelectItem value="other">{content.form.fields.subject.options.other}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="block text-sm font-semibold mb-2">{content.form.fields.message.label}</Label>
        <Textarea
          className="w-full px-4 py-3 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-secondary focus:border-secondary transition-all resize-none min-h-[120px] max-h-[160px]"
          id="message"
          name="message"
          placeholder={content.form.fields.message.placeholder.value}
          required
        />
      </div>

      <button
        className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-red-900 text-white font-bold rounded shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
        type="submit"
        disabled={result === "Sending...."}
      >
        <span className="material-icons-outlined"><MdSend /></span>
        {result === "Sending...." ? "Sending...." : content.form.submitButton}
      </button>

      {result && result !== "Sending...." && (
        <p className={`mt-4 font-semibold ${result === "Form Submitted Successfully" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
          {result}
        </p>
      )}
    </form>
  );
}
