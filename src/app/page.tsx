'use client'
import LayoutComponent from "@/app/components/Layout";
import CardComponent from "./components/Card";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter();


  return (
    <main >
      <LayoutComponent />
      <div style={{ paddingTop: 50 }}>
        <h1> Productos </h1>
        <Button onClick={() => router.push('/crear')} sx={{ mb: 2 }} startIcon={<AddIcon />} variant="contained" color="success">
          Crear
        </Button>
        <CardComponent />
      </div>
    </main>
  );
}
