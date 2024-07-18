import React, { useState } from 'react';
import { ChevronDown, Droplet, AlertTriangle, Stethoscope, BookOpen, Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-8 rounded-xl overflow-hidden shadow-lg bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="w-full text-left p-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-colors flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center text-xl font-bold text-white">
          <Icon className="w-7 h-7 mr-4 text-purple-200" />
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-purple-200" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-gradient-to-b from-white to-purple-50">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InteractiveDiagram = () => {
  const [highlight, setHighlight] = useState(null);

  return (
    <motion.div
      className="mt-8 p-8 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-bold mb-6 text-2xl text-purple-800">Interactive ACE Inhibitor Mechanism:</h3>
      <div className="flex items-center justify-center space-x-12 relative">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('angiotensin1')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center mb-3 shadow-lg">
            <span className="font-bold text-white text-lg">Angiotensin I</span>
          </div>
          <p className="text-sm font-medium text-blue-800">Inactive</p>
        </motion.div>
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('ace')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-md"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full text-sm border-2 border-red-500 font-bold text-red-700 shadow-md">
            ACE
          </div>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('angiotensin2')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-300 to-red-500 flex items-center justify-center mb-3 shadow-lg">
            <span className="font-bold text-white text-lg">Angiotensin II</span>
          </div>
          <p className="text-sm font-medium text-red-800">Active</p>
        </motion.div>
      </div>
      <motion.p
        className="mt-8 text-center text-lg font-medium text-purple-700 bg-white bg-opacity-50 p-4 rounded-lg shadow-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {highlight === 'angiotensin1' && "Angiotensin I is the inactive precursor."}
        {highlight === 'ace' && "ACE Inhibitors block this conversion enzyme."}
        {highlight === 'angiotensin2' && "Angiotensin II causes vasoconstriction and aldosterone release."}
        {!highlight && "Hover over elements to learn more."}
      </motion.p>
    </motion.div>
  );
};

const ACEInhibitorsGuide = () => {
  const [highlightedDrug, setHighlightedDrug] = useState(null);

  const drugs = [
    { name: 'Lisinopril', color: 'bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700' },
    { name: 'Enalapril', color: 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700' },
    { name: 'Ramipril', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700' },
    { name: 'Captopril', color: 'bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700' },
    { name: 'Benazepril', color: 'bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-purple-900 min-h-screen text-white">
      <h1 className="text-5xl font-extrabold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          ACE Inhibitors: Interactive Learning Guide
        </span>
      </h1>

      <Section title="Mechanism of Action" icon={Zap}>
        <p className="mb-4 text-gray-700 leading-relaxed">ACE Inhibitors work by blocking the conversion of Angiotensin I to Angiotensin II in the renin-angiotensin-aldosterone system (RAAS). This leads to several beneficial effects:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
          <li>Decreased vasoconstriction</li>
          <li>Reduced aldosterone secretion</li>
          <li>Lowered blood pressure</li>
          <li>Decreased workload on the heart</li>
          <li>Improved blood flow to kidneys</li>
        </ul>
        <InteractiveDiagram />
      </Section>

      <Section title="Common ACE Inhibitors" icon={Droplet}>
        <p className="mb-8 text-gray-300 leading-relaxed text-lg">Remember the mnemonic "LERCA-B" for common ACE Inhibitors. All ACE inhibitors end with "-pril":</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {drugs.map((drug) => (
            <motion.button
              key={drug.name}
              className={`p-6 rounded-xl transition-all duration-300 ${drug.color} shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50`}
              onMouseEnter={() => setHighlightedDrug(drug.name)}
              onMouseLeave={() => setHighlightedDrug(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold text-white text-xl">{drug.name}</span>
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {highlightedDrug && (
            <motion.p 
              className="text-center font-semibold text-purple-300 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {highlightedDrug} is commonly used for hypertension and heart failure.
            </motion.p>
          )}
        </AnimatePresence>
      </Section>

      <Section title="Clinical Indications" icon={Stethoscope}>
        <ul className="space-y-4 mb-8">
          {[
            { condition: 'Hypertension', detail: 'First-line treatment, especially in diabetes or CKD' },
            { condition: 'Heart Failure', detail: 'Reduces mortality and hospitalizations' },
            { condition: 'Diabetic Nephropathy', detail: 'Slows progression of kidney disease' },
            { condition: 'Post-Myocardial Infarction', detail: 'Improves survival and ventricular remodeling' },
          ].map(({ condition, detail }, index) => (
            <motion.li 
              key={index} 
              className="bg-purple-800 bg-opacity-50 p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-semibold text-purple-300">{condition}: </span>
              <span className="text-gray-300">{detail}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div 
          className="p-6 bg-blue-900 bg-opacity-50 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold mb-3 text-blue-300 text-xl">Clinical Pearl:</h3>
          <p className="text-blue-100 leading-relaxed">ACE Inhibitors are particularly beneficial in patients with diabetes and hypertension due to their renoprotective effects, independent of blood pressure lowering.</p>
        </motion.div>
      </Section>

      <Section title="Side Effects and Monitoring" icon={AlertTriangle}>
        <p className="mb-6 text-gray-300 leading-relaxed text-lg">Remember the mnemonic "CHAMP" for common side effects:</p>
        <ul className="space-y-4 mb-8">
          {[
            { effect: 'Cough (dry)', detail: 'Due to increased bradykinin levels' },
            { effect: 'Hyperkalemia', detail: 'Monitor potassium levels, especially in renal impairment' },
            { effect: 'Angioedema', detail: 'Rare but potentially serious, requires immediate discontinuation' },
            { effect: 'Marker of kidney function change', detail: 'Monitor creatinine and eGFR' },
            { effect: 'Postural hypotension', detail: 'Especially in volume-depleted patients' }
          ].map(({ effect, detail }, index) => (
            <motion.li 
              key={index} 
              className="bg-red-900 bg-opacity-50 p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-semibold text-red-300">{effect[0]}</span>
              <span className="font-semibold text-red-100">{effect.slice(1)}: </span>
              <span className="text-gray-300">{detail}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div 
          className="p-6 bg-yellow-900 bg-opacity-50 border border-yellow-700 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold mb-3 text-yellow-300 text-xl">Important Safety Note:</h3>
          <p className="text-yellow-100 leading-relaxed">ACE Inhibitors are contraindicated in pregnancy (all trimesters) due to the risk of fetal renal damage and other congenital abnormalities. They should be discontinued as soon as pregnancy is detected.</p>
        </motion.div>
      </Section>

      <Section title="Evidence-Based Practice" icon={BookOpen}>
        <p className="mb-6 text-gray-300 leading-relaxed text-lg">Key findings from clinical research:</p>
        <ul className="list-disc pl-8 space-y-4 mb-8 text-gray-300">
          <li>The HOPE trial showed that ramipril significantly reduced cardiovascular events in high-risk patients.</li>
          <li>ACE inhibitors have been shown to reduce mortality in heart failure patients with reduced ejection fraction (HFrEF).</li>
          <li>In the ADVANCE trial, perindopril-indapamide combination significantly reduced major vascular events in type 2 diabetes.</li>
        </ul>
        <motion.div 
          className="p-6 bg-green-900 bg-opacity-50 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold mb-3 text-green-300 text-xl">Practice Tip:</h3>
          <p className="text-green-100 leading-relaxed">When initiating ACE inhibitors, start at a low dose and titrate up gradually while monitoring blood pressure, renal function, and potassium levels.</p>
        </motion.div>
      </Section>

      <motion.div 
        className="mt-12 p-8 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl border border-purple-500 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-300">Key Takeaways</h2>
        <ul className="space-y-4">
          {[
            { icon: Heart, text: 'ACE Inhibitors end in "-pril"' },
            { icon: Zap, text: 'Block conversion of Angiotensin I to II in RAAS' },
            { icon: Stethoscope, text: 'First-line for hypertension, heart failure, and diabetic nephropathy' },
            { icon: AlertTriangle, text: 'Remember "CHAMP" for side effects' },
            { icon: Droplet, text: 'Contraindicated in pregnancy' },
            { icon: BookOpen, text: 'Monitor renal function and potassium levels' }
          ].map(({ icon: Icon, text }, index) => (
            <motion.li 
              key={index} 
              className="flex items-center text-indigo-300 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon className="w-6 h-6 mr-4 text-purple-400" />
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ACEInhibitorsGuide;
