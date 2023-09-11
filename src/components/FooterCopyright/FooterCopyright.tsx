import React from 'react';
import type { FooterCopyrightProps } from './FooterCopyright.types';

export default function FooterCopyright({ site_name }: FooterCopyrightProps) {
  return (
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()}{' '}
        by { site_name }.
      </div>
    </div>
  )
}