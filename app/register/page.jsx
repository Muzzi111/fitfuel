"use server";

import React from 'react'
import { auth } from "@/auth";
import { redirect } from 'next/navigation';
import FillFormComponent from '../components/FillFormComponent';

const page = async () => {
    const session = await auth();

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <main>
            <FillFormComponent session={session} />
        </main>
    );
};

export default page;
