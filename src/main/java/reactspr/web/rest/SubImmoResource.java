package reactspr.web.rest;

import reactspr.domain.SubImmo;
import reactspr.repository.SubImmoRepository;
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
public class SubImmoResource {

    private final Logger log = LoggerFactory.getLogger(SubImmoResource.class);

    private static final String ENTITY_NAME = "subImmo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SubImmoRepository subImmoRepository;

    public SubImmoResource(SubImmoRepository subImmoRepository) {
        this.subImmoRepository = subImmoRepository;
    }

    /**
     * {@code POST  /subImmo} : Create a new subImmo.
     *
     * @param subImmo the subImmo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new subImmo, or with status {@code 400 (Bad Request)} if the
     *         subImmo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @PostMapping("/subImmo")
    public ResponseEntity<SubImmo> createSubImmo(@RequestBody SubImmo subImmo) throws URISyntaxException {
        log.debug("REST request to save Personne : {}", subImmo);
        if (subImmo.getNumSub() != null) {
            throw new BadRequestAlertException("A new subImmo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        SubImmo result = subImmoRepository.save(subImmo);
        return ResponseEntity.created(new URI("/api/subImmo/" + result.getNumSub()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumSub().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /subImmo} : Updates an existing subImmo.
     *
     * @param subImmo the subImmo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated subImmo, or with status {@code 400 (Bad Request)} if the
     *         subImmo is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the subImmo couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_MANAGER')")
    @PutMapping("/subImmo")
    public ResponseEntity<SubImmo> updateSubImmo(@RequestBody SubImmo subImmo) throws URISyntaxException {
        log.debug("REST request to update SubImmo : {}", subImmo);
        if (subImmo.getNumSub() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        SubImmo result = subImmoRepository.save(subImmo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        subImmo.getNumSub().toString()))
            .body(result);
    }

    /**
     * {@code GET  /subImmo} : get all the subImmo.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of subImmo in body.
     */
     @GetMapping("/subImmo")
    public List<SubImmo> getAllSubImmo() {
        log.debug("REST request to get all subImmo");
        return subImmoRepository.findAll();
    }

    /**
     * {@code GET  /subImmo/:numSub} : get the "numSub" Subimmo.
     *
     * @param id the numSub of the subImmo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the subImmo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/subImmo/{numSub}")
    public ResponseEntity<SubImmo> getSubImmo(@PathVariable Long numSub) {
        log.debug("REST request to get Personne : {}", numSub);
        Optional<SubImmo> sub = subImmoRepository.findById(numSub);
        return ResponseUtil.wrapOrNotFound(sub);
    }

    /**
     * {@code DELETE  /subImmo/:numSub} : delete the "numSub" SubImmo.
     *
     * @param numSub the numSub of the SubImmo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @DeleteMapping("/subImmo/{numSub}")
    public ResponseEntity<Void> deleteSubImmo(@PathVariable Long numSub) {
        log.debug("REST request to delete Personne : {}", numSub);
        subImmoRepository.deleteById(numSub);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, numSub.toString())).build();
    }
}
