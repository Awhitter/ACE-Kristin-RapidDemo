import React, { useState } from 'react';
import { ChevronDown, Heart, Droplet, AlertTriangle, Stethoscope, BookOpen, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="w-full text-left p-5 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-colors flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center text-lg font-semibold text-gray-800">
          <Icon className="w-6 h-6 mr-3 text-indigo-600" />
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5 border-t border-gray-100">{children}</div>
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
      className="mt-6 p-6 bg-gray-50 rounded-lg shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-semibold mb-4 text-lg text-gray-800">Interactive ACE Inhibitor Mechanism:</h3>
      <div className="flex items-center justify-center space-x-8 relative">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('angiotensin1')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-2 border-2 border-blue-300">
            <span className="font-semibold text-blue-800">Angiotensin I</span>
          </div>
          <p className="text-sm text-gray-600">Inactive</p>
        </motion.div>
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('ace')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-24 h-1 bg-red-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-sm border-2 border-red-500 font-semibold text-red-700">
            ACE
          </div>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHighlight('angiotensin2')}
          onMouseLeave={() => setHighlight(null)}
        >
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-2 border-2 border-red-300">
            <span className="font-semibold text-red-800">Angiotensin II</span>
          </div>
          <p className="text-sm text-gray-600">Active</p>
        </motion.div>
      </div>
      <motion.p
        className="mt-6 text-center text-sm font-medium text-indigo-600"
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
    { name: 'Lisinopril', color: 'bg-blue-50 hover:bg-blue-100 border-blue-200' },
    { name: 'Enalapril', color: 'bg-green-50 hover:bg-green-100 border-green-200' },
    { name: 'Ramipril', color: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200' },
    { name: 'Captopril', color: 'bg-red-50 hover:bg-red-100 border-red-200' },
    { name: 'Benazepril', color: 'bg-purple-50 hover:bg-purple-100 border-purple-200' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
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
        <p className="mb-6 text-gray-700 leading-relaxed">Remember the mnemonic "LERCA-B" for common ACE Inhibitors. All ACE inhibitors end with "-pril":</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {drugs.map((drug) => (
            <button
              key={drug.name}
              className={`p-4 rounded-lg transition-all duration-200 ${drug.color} border-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
              onMouseEnter={() => setHighlightedDrug(drug.name)}
              onMouseLeave={() => setHighlightedDrug(null)}
            >
              <span className="font-medium text-gray-800">{drug.name}</span>
            </button>
          ))}
        </div>
        {highlightedDrug && (
          <p className="text-center font-semibold text-indigo-600 transition-opacity duration-200">
            {highlightedDrug} is commonly used for hypertension and heart failure.
          </p>
        )}
      </Section>

      <Section title="Clinical Indications" icon={Stethoscope}>
        <ul className="space-y-3 mb-6">
          {[
            { condition: 'Hypertension', detail: 'First-line treatment, especially in diabetes or CKD' },
            { condition: 'Heart Failure', detail: 'Reduces mortality and hospitalizations' },
            { condition: 'Diabetic Nephropathy', detail: 'Slows progression of kidney disease' },
            { condition: 'Post-Myocardial Infarction', detail: 'Improves survival and ventricular remodeling' },
          ].map(({ condition, detail }, index) => (
            <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-indigo-600">{condition}: </span>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold mb-2 text-blue-800">Clinical Pearl:</h3>
          <p className="text-blue-700 leading-relaxed">ACE Inhibitors are particularly beneficial in patients with diabetes and hypertension due to their renoprotective effects, independent of blood pressure lowering.</p>
        </div>
      </Section>

      <Section title="Side Effects and Monitoring" icon={AlertTriangle}>
        <p className="mb-4 text-gray-700 leading-relaxed">Remember the mnemonic "CHAMP" for common side effects:</p>
        <ul className="space-y-3 mb-6">
          {[
            { effect: 'Cough (dry)', detail: 'Due to increased bradykinin levels' },
            { effect: 'Hyperkalemia', detail: 'Monitor potassium levels, especially in renal impairment' },
            { effect: 'Angioedema', detail: 'Rare but potentially serious, requires immediate discontinuation' },
            { effect: 'Marker of kidney function change', detail: 'Monitor creatinine and eGFR' },
            { effect: 'Postural hypotension', detail: 'Especially in volume-depleted patients' }
          ].map(({ effect, detail }, index) => (
            <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-indigo-600">{effect[0]}</span>
              <span className="font-semibold">{effect.slice(1)}: </span>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold mb-2 text-yellow-800">Important Safety Note:</h3>
          <p className="text-yellow-700 leading-relaxed">ACE Inhibitors are contraindicated in pregnancy (all trimesters) due to the risk of fetal renal damage and other congenital abnormalities. They should be discontinued as soon as pregnancy is detected.</p>
        </div>
      </Section>

      <Section title="Evidence-Based Practice" icon={BookOpen}>
        <p className="mb-4 text-gray-700 leading-relaxed">Key findings from clinical research:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
          <li>The HOPE trial showed that ramipril significantly reduced cardiovascular events in high-risk patients.</li>
          <li>ACE inhibitors have been shown to reduce mortality in heart failure patients with reduced ejection fraction (HFrEF).</li>
          <li>In the ADVANCE trial, perindopril-indapamide combination significantly reduced major vascular events in type 2 diabetes.</li>
        </ul>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold mb-2 text-green-800">Practice Tip:</h3>
          <p className="text-green-700 leading-relaxed">When initiating ACE inhibitors, start at a low dose and titrate up gradually while monitoring blood pressure, renal function, and potassium levels.</p>
        </div>
      </Section>

      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-indigo-800">Key Takeaways</h2>
        <ul className="space-y-3">
          {[
            'ACE Inhibitors end in "-pril"',
            'Block conversion of Angiotensin I to II in RAAS',
            'First-line for hypertension, heart failure, and diabetic nephropathy',
            'Remember "CHAMP" for side effects',
            'Contraindicated in pregnancy',
            'Monitor renal function and potassium levels'
          ].map((item, index) => (
            <li key={index} className="flex items-center text-indigo-700">
              <Zap className="w-5 h-5 mr-3 text-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ACEInhibitorsGuide;
