package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Veiculo;

import java.util.List;

public interface VeiculoService {
    public Veiculo salvarVeiculos(Veiculo veiculo);
    public List<Veiculo> getAllVeiculos();
}
