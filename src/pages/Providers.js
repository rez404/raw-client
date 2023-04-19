
import {  SaasProvider } from "@saas-ui/react";

import { theme } from "@/theme";



const Providers = ({ children }) => {
  
  return (
          <SaasProvider theme={theme}>
           
            {children}
          </SaasProvider>
     
  );
};

export default Providers;
