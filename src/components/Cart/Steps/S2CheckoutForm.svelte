<script>
    export let formData;
</script>

<form action="" class="container grid grid-flow-col grid-rows-6 gap-4 md:grid-rows-3">
    <div class="block w-full max-w-xs">
        <label for="cep" class="label">
            <span class="label-text">CEP:</span>
        </label>
        <input
            bind:value={formData.CEP}
            id="cep"
            type="text"
            placeholder="CEP"
            class="input input-bordered w-full max-w-xs"
        />
    </div>

    <div class="w-full max-w-xs">
        <label for="endereco" class="label">
            <span class="label-text">Endereço:</span>
        </label>
        <input
            bind:value={formData.Endereco}
            id="endereco"
            type="text"
            placeholder="Endereço"
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="w-full max-w-xs">
        <label for="bairro" class="label">
            <span class="label-text">Bairro:</span>
        </label>
        <input
            bind:value={formData.Bairro}
            id="bairro"
            type="text"
            placeholder="Bairro"
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="w-full max-w-xs">
        <label for="numero" class="label">
            <span class="label-text">Número (Nº):</span>
        </label>
        <input
            bind:value={formData.Numero}
            id="numero"
            type="text"
            placeholder="Número"
            class="input input-bordered w-full max-w-xs"
        />
    </div>

    <div class="w-full max-w-xs">
        <label for="cidade" class="label">
            <span class="label-text">Cidade:</span>
        </label>
        <input
            bind:value={formData.Cidade}
            id="cidade"
            type="text"
            placeholder="Cidade"
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="w-full max-w-xs">
        <label for="complemento" class="label">
            <span class="label-text">Complemento:</span>
        </label>
        <input
            bind:value={formData.Complemento}
            id="complemento"
            type="text"
            placeholder="Complemento"
            class="input input-bordered w-full max-w-xs"
        />

        <div aria-disabled="true" disabled class="disabled hidden w-full max-w-xs">
            <label for="uf" class="label">
                <span class="label-text">UF</span>
            </label>
            <select disabled id="uf" class="disabled select select-bordered">
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
            </select>
        </div>
    </div>
</form>
