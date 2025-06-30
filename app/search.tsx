'use client'

import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchComponentProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  isLoading: boolean
}

export function SearchComponent({ handleSubmit, input, handleInputChange, isLoading }: SearchComponentProps) {
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pt-12">
      <div className="relative flex items-center group">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="What do you want to know?"
          className="pr-16 h-16 text-lg rounded-2xl border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-lg transition-all duration-200 focus:border-orange-400 focus:shadow-xl focus:shadow-orange-100/50 dark:focus:shadow-orange-900/20 placeholder:text-gray-400 dark:placeholder:text-gray-400"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          variant="orange"
          size="icon"
          className="absolute right-3 h-10 w-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </div>
    </form>
  )
}