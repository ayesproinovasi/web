import { routesType } from "types/Sidebar";

// eslint-disable-next-line import/prefer-default-export
export const AdminRoutes: routesType = [
  //update
  {
    path: "",
    key: "Mitigation Solution",
    name: "Mitigation Solution",
    icon: "",
    children: [],
  },
  {
    path: "/product/Coating_Quality_Measurement",
    key: "/product/Coating_Quality_Measurement",
    name: "C-Cube",
    icon: "",
    children: [
      {
        path: "/product/Coating_Quality_Measurement",
        key: "/product/Coating_Quality_Measurement",
        name: "Coating Quality Measurement",
      }
    ],
  },
  
  {
    path: "/product/Neu_Scan",
    key: "/product/Neu_Scan",
    name: "Scansolution",
    icon: "",
    children: [
      {
        path: "/product/Neu_Scan",
        key: "/product/Neu_Scan",
        name: "NeuScan",
      },
      {
        path: "/product/WI_Discovery_Device",
        key: "/product/WI_Discovery_Device",
        name: "WI Discovery Device",
      },
    ],
  },
  {
    path: "/product/STIC_60",
    key: "/product/STIC_60",
    name: "Smart Thermal Indicative Coating",
    icon: "",
    children: [
      {
        path: "/product/STIC_60",
        key: "/product/STIC_60",
        name: "STIC 60",
      }
    ],
  },
  
  //update

  {
    path: "",
    key: "Preventive Solution",
    name: "Preventive Solution",
    icon: "",
    children: [],
  },
  {
    path: "/product/S2S_HD_Corrosion_Shield",
    key: "/product/S2S_HD_Corrosion_Shield",
    name: "S2S Anti Corrosion Inhibitor System",
    icon: "",
    children: [
      // {
      //   path: "/product/S2S_PLID_Wrap",
      //   key: "/product/S2S_PLID_Wrap",
      //   name: "S2S PLID Wrap",
      // },
      {
        path: "/product/S2S_HD_Corrosion_Shield",
        key: "/product/S2S_HD_Corrosion_Shield",
        name: "S2S HD Corrosion Shield",
      },
      {
        path: "/product/S2S_Void_&_Rudder_Float_Coat",
        key: "/product/S2S_Void_&_Rudder_Float_Coat",
        name: "S2S Void & Rudder Float Coat",
      },
      {
        path: "/product/S2S_Anchor_Chain_Corrosion_Control",
        key: "/product/S2S_Anchor_Chain_Corrosion_Control",
        name: "S2S Anchor Chain Corrosion Control",
      },
      {
        path: "/product/S2S_Automotive_Rust_Proofing",
        key: "/product/S2S_Automotive_Rust_Proofing",
        name: "S2S Automotive Rust Proofing",
      },
    ],
  },
  {
    path: "/product/WaxTape_1_Non_firming_Wrap",
    key: "/product/WaxTape_1_Non_firming_Wrap",
    name: "Trenton Waxtape Systems",
    icon: "",
    children: [
      {
        path: "/product/WaxTape_1_Non_firming_Wrap",
        key: "/product/WaxTape_1_Non_firming_Wrap",
        name: "Wax-Tape #1 Non-firming wrap",
      },
      {
        path: "/product/WaxTape_2_Self_Firming_Wrap",
        key: "/product/WaxTape_2_Self_Firming_Wrap",
        name: "Wax-Tape #2 Non-firming wrap",
      },
      {
        path: "/product/Waxtape_HT_3000",
        key: "/product/Waxtape_HT_3000",
        name: "Wax-Tape HT 3000",
      },
      {
        path: "/product/Riser_Kits",
        key: "/product/Riser_Kits",
        name: "Riser Kits",
      },
      
      // {
      //   path: "/product/Non_firming_anticorrosion_wrap",
      //   key: "/product/Non_firming_anticorrosion_wrap",
      //   name: "Non-firming anticorrosion wrap",
      // },
      // {
      //   path: "/product/self_firming_anticorrosion_wrap",
      //   key: "/product/self_firming_anticorrosion_wrap",
      //   name: "Self-firming anticorrosion wrap",
      // },
      // {
      //   path: "/product/Trenton_Temcoat_3000_primer",
      //   key: "/product/Trenton_Temcoat_3000_primer",
      //   name: "Trenton Temcoat 3000 primer",
      // },
      // {
      //   path: "/product/Trenton_Patch_Pad_Exothermic_weld_protector",
      //   key: "/product/Trenton_Patch_Pad_Exothermic_weld_protector",
      //   name: "Trenton Patch-Pad Exothermic weld protector",
      // },
      // {
      //   path: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
      //   key: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
      //   name: "Trenton Fill-Coat #1 Hot Applied Wax Casing Filler",
      // },
      // {
      //   path: "/product/Trenton_Fill_Coat_2_Hot_Applied_Wax_Casing_Filler",
      //   key: "/product/Trenton_Fill_Coat_2_Hot_Applied_Wax_Casing_Filler",
      //   name: "Trenton Fill-Coat #2 Hot Applied Wax Casing Filler",
      // },
    ],
  },
  {
    path: "/product/WaxTape_Primer_Brown",
    key: "/product/WaxTape_Primer_Brown",
    name: "Trenton Prime & Others",
    icon: "",
    children: [
      {
        path: "/product/WaxTape_Primer_Brown",
        key: "/product/WaxTape_Primer_Brown",
        name: "WaxTape Primer Brown",
      },
      {
        path: "/product/WaxTape_Primer_White",
        key: "/product/WaxTape_Primer_White",
        name: "WaxTape Primer White",
      },
      {
        path: "/product/Trenton_Temcoat_3000_primer",
        key: "/product/Trenton_Temcoat_3000_primer",
        name: "Temcoat™ 3000 Primer",
      },
      {
        path: "/product/Fill_Pro_Profiling_Mastic",
        key: "/product/Fill_Pro_Profiling_Mastic",
        name: "Fill-Pro™ PM-GP Profiling Mastic",
      },
      {
        path: "/product/Fill_Putty_Profiling_Mastic",
        key: "/product/Fill_Putty_Profiling_Mastic",
        name: "Fill-Putty™ Profiling Mastic",
      },
      {
        path: "/product/Patch_Pad_Exothermic_Weld_Protector",
        key: "/product/Patch_Pad_Exothermic_Weld_Protector",
        name: "Patch-Pad® ",
      },
    ],
  },
  {
    path: "/product/Innercoat_for_Pipeline_Reconditioning",
    key: "/product/Innercoat_for_Pipeline_Reconditioning",
    name: "Trenton Innercoat",
    icon: "",
    children: [
      {
        path: "/product/Innercoat_for_Pipeline_Reconditioning",
        key: "/product/Innercoat_for_Pipeline_Reconditioning",
        name:"Pipeline Reconditioning",
      },
      {
        path: "/product/Innercoat_for_Flange_Fill",
        key: "/product/Innercoat_for_Flange_Fill",
        name: "Flange Fill",
      },
     
    ],
  },
  {
    path: "/product/MCO_Outerwrap",
    key: "/product/MCO_Outerwrap",
    name: "Trenton Outerwrap",
    icon: "",
    children: [
      {
        path: "/product/MCO_Outerwrap",
        key: "/product/MCO_Outerwrap",
        name:"MCO® Outerwrap",
      },
      {
        path: "/product/MCO_110_Outerwrap",
        key: "/product/MCO_110_Outerwrap",
        name: "MCO® 110 Outerwrap",
      },
      {
        path: "/product/PVC_Outerwrap",
        key: "/product/PVC_Outerwrap",
        name: "PVC Outerwrap",
      },
     
      {
        path: "/product/Guard-Wrap™ Outerwrap",
        key: "/product/Guard-Wrap™ Outerwrap",
        name: "Guard-Wrap™ Outerwrap",
      },
     
      {
        path: "/product/Poly_Ply_Outerwrap",
        key: "/product/Poly_Ply_Outerwrap",
        name: "Poly-Ply™ Outerwrap",
      },
     
      {
        path: "/product/Glas_Wrap_Outerwrap",
        key: "/product/Glas_Wrap_Outerwrap",
        name: "Glas-Wrap™ Outerwrap",
      },
    ],
    
  },


  {
    path: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
    key: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
    name: "Trenton Casing Filling",
    icon: "",
    children: [
      {
        path: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
        key: "/product/Trenton_Fill_Coat_1_Hot_Applied_Wax_Casing_Filler",
        name:"Hot Applied Wax Casing Filler #1",
      },
      {
        path: "/product/Trenton_Fill_Coat_2_Cold_Applied_Wax_Casing_Filler",
        key: "/product/Trenton_Fill_Coat_2_Cold_Applied_Wax_Casing_Filler",
        name: "Cold-applied Wax Casing Filler #2 ",
      },
      {
        path: "/product/Trenton_Fill_Coat_6_Cold_Applied_Wax_Casing_Filler",
        key: "/product/Trenton_Fill_Coat_6_Cold_Applied_Wax_Casing_Filler",
        name: "Cold-Applied Wax Casing Filler #6 ",
      },
     
      {
        path: "/product/Pre_Con_Casing_Corrosion_Inhibitor",
        key: "/product/Pre_Con_Casing_Corrosion_Inhibitor",
        name: "Pre-Con® Casing Corrosion Inhibitor",
      },
     
      {
        path: "/product/Short_Stop",
        key: "/product/Short_Stop",
        name: "Short-Stop™",
      },
     
      {
        path: "/product/Seal_Wrap",
        key: "/product/Seal_Wrap",
        name: "Seal-Wrap™ End Seal",
      },
    ],
    
  },
  //
  {
    path: "/product/Coating_Systems",
    key: "/product/Coating_Systems",
    name: "Coating Systems Group",
    icon: "",
    children: [
      {
        path: "/product/Weicon_Ceramic_HC220",
        key: "/product/Weicon_Ceramic_HC220",
        name: "Weicon Ceramic Coating",
      },
      {
        path: "/product/Weicon_GL",
        key: "/product/Weicon_GL",
        name: "Weicon GL",
      },
      {
        path: "/product/Weicon_HB_300",
        key: "/product/Weicon_HB_300",
        name: "Weicon HB 300",
      },
      {
        path: "/product/Weicon_HP",
        key: "/product/Weicon_HP",
        name: "Weicon HP",
      },
    ],
  },
  {
    path: "/product/Surface_Treatment_Protection_Systems",
    key: "/product/Surface_Treatment_Protection_Systems",
    name: "Surface Treatment Protection Systems",
    icon: "",
    children: [
      {
        path: "/product/EonCoat_Corrosion_Protection_(CP)",
        key: "/product/EonCoat_Corrosion_Protection_(CP)",
        name: "EonCoat Corrosion Protection (CP)",
      },
      {
        path: "/product/EonCoat_CUI",
        key: "/product/EonCoat_CUI",
        name: "EonCoat CUI",
      },
    ],
  },
  // batas preventtive
  {
    path: "",
    key: "Corrective Solution",
    name: "Corrective Solution",
    icon: "",
    children: [],
  },
  {
    path: "/product/CarbonSeal",
    key: "/product/CarbonSeal",
    // name: "Corrective Solutions",
    name: "HJ3 Group",
    icon: "",
    children: [
      {
        path: "/product/CarbonSeal",
        key: "/product/CarbonSeal",
        name: "CarbonSeal",
      },
      {
        path: "/product/StrongHold",
        key: "/product/StrongHold",
        name: "StrongHold",
      },
      {
        path: "/product/TankWrap",
        key: "/product/TankWrap",
        name: "TankWrap",
      },
      {
        path: "/product/ChemSeal",
        key: "/product/ChemSeal",
        name: "ChemSeal",
      },
      {
        path: "/product/GlassSeal",
        key: "/product/GlassSeal",
        name: "GlassSeal",
      },
    ],
  },
  {
    path: "/product/Emergency_Leak_Repair_Kit",
    key: "/product/Emergency_Leak_Repair_Kit",
    name: "Emergency Leak Repair Kit",
    icon: "",
    children: [
      {
        path: "/product/Corrwrap",
        key: "/product/Corrwrap",
        name: "Corwrap",
      },
    ],
  },
];
