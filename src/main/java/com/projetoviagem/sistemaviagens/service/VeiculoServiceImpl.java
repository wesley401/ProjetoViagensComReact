package com.projetoviagem.sistemaviagens.service;


import com.projetoviagem.sistemaviagens.model.Veiculo;
import com.projetoviagem.sistemaviagens.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VeiculoServiceImpl implements VeiculoService{

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Override
    public Veiculo salvarVeiculos(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    @Override
    public List<Veiculo> getAllVeiculos() {
        return veiculoRepository.findAll();
    }
}
