'use client';

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export function PdfViewerButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="inline-flex items-center px-4 py-2 bg-ci-orange text-white rounded-xl hover:bg-orange-500 transition-colors"
        >
          <Eye className="h-4 w-4 mr-2" /> Visualiser le rapport des agents de la DGI
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
        <DialogTitle className="sr-only">Rapport des agents de la DGI</DialogTitle>
        <div className="w-full h-[80vh]">
          <object 
            data="/images/Actualites/RapportFinal_Formation_PAGDS.pdf" 
            type="application/pdf"
            className="w-full h-full"
          >
            <p>Votre navigateur ne supporte pas l'affichage des PDF. 
              <a href="/images/Actualites/RapportFinal_Formation_PAGDS.pdf" className="text-blue-600 hover:underline">
                Télécharger le PDF
              </a>.
            </p>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
}
