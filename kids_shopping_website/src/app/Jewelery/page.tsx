'use client';

import PageCatalouge from '../../components/layout/Catalouge/PageCatalouge';
import {filters , categories} from '../../config';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Jewelary=()=>{
    const pathname = usePathname()
    let categoryFind:any = categories.find((item)=>{
        return item.value === pathname.substring(1);
    })
    return <PageCatalouge shopBy={filters} categoryName={categoryFind.name}/>
}

export default Jewelary;