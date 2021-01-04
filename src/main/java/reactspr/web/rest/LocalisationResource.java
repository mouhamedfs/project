package reactspr.web.rest;

import reactspr.domain.Localisation;
import reactspr.repository.LocalisationRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Departement}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class LocalisationResource {

    private final Logger log = LoggerFactory.getLogger(LocalisationResource.class);

    private static final String ENTITY_NAME = "Localisation";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final LocalisationRepository localisationRepository;

    public LocalisationResource(LocalisationRepository localisationRepository) {
        this.localisationRepository = localisationRepository;
    }

    /**
     * {@code POST  /localisation} : Create a new Localisation.
     *
     * @param localisation the localisation to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new localisation, or with status {@code 400 (Bad Request)}
     *         if the localisation has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/localisation")
    public ResponseEntity<Localisation> createLocalisation(@Valid @RequestBody Localisation local) throws URISyntaxException {
        log.debug("REST request to save Localisation : {}", local);
        if (local.getCodeLocal() != null) {
            throw new BadRequestAlertException("A new Agence cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Localisation result = localisationRepository.save(local);
        return ResponseEntity.created(new URI("/api/localisation/" + result.getCodeLocal()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCodeLocal()))
            .body(result);
    }

    /**
     * {@code PUT  /localisation} : Updates an existing localisation.
     *
     * @param localisation the localisation to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated localisation, or with status {@code 400 (Bad Request)} if
     *         the localisation is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the localisation couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/localisation")
    public ResponseEntity<Localisation> updateLocalisation(@Valid @RequestBody Localisation local) throws URISyntaxException {
        log.debug("REST request to update Localisation : {}", local);
        if (local.getCodeLocal() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Localisation result = localisationRepository.save(local);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        local.getCodeLocal()))
            .body(result);
    }

    /**
     * {@code GET  /localisation} : get all the localisation.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of localisation in body.
     */
    @GetMapping("/localisation")
    public List<Localisation> getAllLocalisation() {
        log.debug("REST request to get all Localisation");
        return localisationRepository.findAll();
    }

    /**
     * {@code GET  /localisation/:codeLocal} : get the "codeLocal" Localisation.
     *
     * @param codeLocal the codeLocal of the Localisation to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Localisation, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/localisation/{codeLocal}")
    public ResponseEntity<Localisation> getLocalisation(@PathVariable String codeLocal) {
        log.debug("REST request to get Departement : {}", codeLocal);
        Optional<Localisation> local = localisationRepository.findById(codeLocal);
        return ResponseUtil.wrapOrNotFound(local);
    }

    /**
     * {@code DELETE  /localisation/:codeLocal} : delete the "codeLocal"
     * Localisation.
     *
     * @param codeLocal the codeLocal of the Localisation to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/localisation/{codeLocal}")
    public ResponseEntity<Void> deleteLocalisation(@PathVariable String codeLocal) {
        log.debug("REST request to delete Agence : {}", codeLocal);
        localisationRepository.deleteById(codeLocal);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                codeLocal)).build();
    }
}
