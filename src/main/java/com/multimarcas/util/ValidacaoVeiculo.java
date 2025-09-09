package com.multimarcas.util;

import java.util.regex.Pattern;

import com.multimarcas.dto.VeiculoDTO;



public final class ValidacaoVeiculo {

    private static final Pattern PADRAO_ANTIGO = Pattern.compile("^[A-Z]{3}[0-9]{4}$");
    private static final Pattern PADRAO_MERCOSUL = Pattern.compile("^[A-Z]{3}[0-9][A-Z][0-9]{2}$");

    private ValidacaoVeiculo() { 

    }

   
     /**
     * 
     * @param placa 
     * @return 
     */

    public static boolean isPlacaValida(VeiculoDTO dto) {
       
        dto.setPlaca(dto.getPlaca().replaceAll(" ", "").trim().toUpperCase());
        if (dto.getPlaca().length() == 7) {
            return PADRAO_ANTIGO.matcher(dto.getPlaca()).matches() || 
                   PADRAO_MERCOSUL.matcher(dto.getPlaca()).matches();
        }
        return false;
    
    }
}
