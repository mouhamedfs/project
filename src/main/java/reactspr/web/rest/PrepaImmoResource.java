package reactspr.web.rest;
import reactspr.domain.PrepaImmo;
import reactspr.repository.PrepaImmoRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Personne}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PrepaImmoResource {

    private final Logger log = LoggerFactory.getLogger(PrepaImmoResource.class);

    private static final String ENTITY_NAME = "prepaImmo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PrepaImmoRepository prepaImmoRepository;

    public PrepaImmoResource(PrepaImmoRepository prepaImmoRepository) {
        this.prepaImmoRepository = prepaImmoRepository;
    }

    /**
     * {@code POST  /prepaImmo} : Create a new Immo.
     *
     * @param prepaImmo the Immo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new Immo, or with status {@code 400 (Bad Request)} if the
     *         Immo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @PostMapping("/prepaImmo")
    public ResponseEntity<PrepaImmo> createImmo(@RequestBody PrepaImmo prepaImmo) throws URISyntaxException {
        log.debug("REST request to save Immo : {}", prepaImmo);
        if (prepaImmo.getNumero() != null) {
            throw new BadRequestAlertException("A new Immo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PrepaImmo result = prepaImmoRepository.save(prepaImmo);
        return ResponseEntity.created(new URI("/api/prepaImmo/" + result.getNumero()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumero().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /Immo} : Updates an existing Immo.
     *
     * @param prepaImmo the Immo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated Immo, or with status {@code 400 (Bad Request)} if the
     *         personne is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the prepaImmo couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_MANAGER')")
    @PutMapping("/prepaImmo")
    public ResponseEntity<PrepaImmo> updatePrepaImmo(@RequestBody PrepaImmo prepaImmo) throws URISyntaxException {
        log.debug("REST request to update an Immo : {}", prepaImmo);
        if (prepaImmo.getNumero() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PrepaImmo result = prepaImmoRepository.save(prepaImmo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        prepaImmo.getNumero().toString()))
            .body(result);
    }

    /**
     * {@code GET  /prepaImmo} : get all the Immo.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of personnes in body.
     */
     @GetMapping("/prepaImmo")
    public List<PrepaImmo> getAllPrepaImmo() {
        log.debug("REST request to get all PrepaImmo");
        return prepaImmoRepository.findAll();
    }

    /**
     * {@code GET  /prepaImmo/:numero} : get the "numero" Immo.
     *
     * @param id the id of the prepaImmo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the prepaImmo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/prepaImmo/{numero}")
    public ResponseEntity<PrepaImmo> getPrepaImmo(@PathVariable Long numero) {
        log.debug("REST request to get Immo : {}", numero);
        Optional<PrepaImmo> prepaImmo = prepaImmoRepository.findById(numero);
        return ResponseUtil.wrapOrNotFound(prepaImmo);
    }

    /**
     * {@code DELETE  /prepaImmo/:numero} : delete the "numero" prepaImmo.
     *
     * @param numero the numero of the PrepaImmo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @DeleteMapping("/prepaImmo/{numero}")
    public ResponseEntity<Void> deletePrepaImmo(@PathVariable Long numero) {
        log.debug("REST request to delete Immo : {}", numero);
        prepaImmoRepository.deleteById(numero);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                numero.toString())).build();
    }
}
