import React from 'react';
import type { I_Copyright } from './Copyright.types';

export default function Copyright({ site_name }: I_Copyright) {
  return (
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-900 dark:text-gray-200">
        © Copyright {new Date().getFullYear()}{' '}
        by { site_name }.
      </div>
    </div>
  )
}