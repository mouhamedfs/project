package reactspr.web.rest;

import reactspr.domain.Agence;
import reactspr.repository.AgenceRepository;
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
public class AgenceResource {

    private final Logger log = LoggerFactory.getLogger(AgenceResource.class);

    private static final String ENTITY_NAME = "Agence";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AgenceRepository agenceRepository;

    public AgenceResource(AgenceRepository agenceRepository) {
        this.agenceRepository = agenceRepository;
    }

    /**
     * {@code POST  /agence} : Create a new Agence.
     *
     * @param agence the agence to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new agence, or with status {@code 400 (Bad Request)} if the
     *         agence has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/agence")
    public ResponseEntity<Agence> createAgence(@Valid @RequestBody Agence agen) throws URISyntaxException {
        log.debug("REST request to save Agence : {}", agen);
        if (agen.getAge() != null) {
            throw new BadRequestAlertException("A new Agence cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Agence result = agenceRepository.save(agen);
        return ResponseEntity.created(new URI("/api/agence/" + result.getAge()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getAge().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /agence} : Updates an existing agence.
     *
     * @param agence the agence to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated agence, or with status {@code 400 (Bad Request)} if the
     *         agence is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the agence couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/agence")
    public ResponseEntity<Agence> updateAgence(@Valid @RequestBody Agence agen) throws URISyntaxException {
        log.debug("REST request to update Agence : {}", agen);
        if (agen.getAge() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Agence result = agenceRepository.save(agen);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        agen.getAge().toString()))
            .body(result);
    }

    /**
     * {@code GET  /agence} : get all the agence.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of agence in body.
     */
    @GetMapping("/agence")
    public List<Agence> getAllAgence() {
        log.debug("REST request to get all Agence");
        return agenceRepository.findAll();
    }

    /**
     * {@code GET  /agence/:age} : get the "age" Agence.
     *
     * @param age the age of the agence to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the agence, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/agence/{age}")
    public ResponseEntity<Agence> getAgence(@PathVariable Long age) {
        log.debug("REST request to get Departement : {}", age);
        Optional<Agence> agen = agenceRepository.findById(age);
        return ResponseUtil.wrapOrNotFound(agen);
    }

    /**
     * {@code DELETE  /agence/:age} : delete the "age" Agence.
     *
     * @param id the age of the Agence to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/agence/{age}")
    public ResponseEntity<Void> deleteAgence(@PathVariable Long age) {
        log.debug("REST request to delete Agence : {}", age);
        agenceRepository.deleteById(age);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                age.toString())).build();
    }
}
