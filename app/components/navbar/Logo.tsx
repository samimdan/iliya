import { NavCompany } from '@/app/enum/PersianCommonWorld'
import React from 'react'

export default function Logo() {
	return (
		<div>
			<span className='text-purple-700'>{NavCompany.CompanyName}</span>
		</div>
	)
}
