package reactspr.web.rest;

import reactspr.domain.Subvention;
import reactspr.repository.SubventionRepository;
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
public class SubventionResource {

    private final Logger log = LoggerFactory.getLogger(SubventionResource.class);

    private static final String ENTITY_NAME = "Subvention";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SubventionRepository subventionRepository;

    public SubventionResource(SubventionRepository subventionRepository) {
        this.subventionRepository = subventionRepository;
    }

    /**
     * {@code POST  /subvention} : Create a new subvention.
     *
     * @param subvention the subvention to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new subvention, or with status {@code 400 (Bad Request)} if
     *         the subvention has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @PostMapping("/subvention")
    public ResponseEntity<Subvention> createSubvention(@RequestBody Subvention subvention) throws URISyntaxException {
        log.debug("REST request to save Subvention : {}", subvention);
        if (subvention.getNumSub() != null) {
            throw new BadRequestAlertException("A new subvention cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Subvention result = subventionRepository.save(subvention);
        return ResponseEntity.created(new URI("/api/subvention/" + result.getNumSub()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumSub().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /subvention} : Updates an existing subvention.
     *
     * @param subvention the subvention to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated subvention, or with status {@code 400 (Bad Request)} if
     *         the subvention is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the subvention couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_MANAGER')")
    @PutMapping("/subvention")
    public ResponseEntity<Subvention> updateSubvention(@RequestBody Subvention subvention) throws URISyntaxException {
        log.debug("REST request to update subvention : {}", subvention);
        if (subvention.getNumSub() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Subvention result = subventionRepository.save(subvention);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        subvention.getNumSub().toString()))
            .body(result);
    }

    /**
     * {@code GET  /subvention} : get all the subvention.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of subvention in body.
     */
     @GetMapping("/subvention")
    public List<Subvention> getAllSubvention() {
        log.debug("REST request to get all Subvention");
        return subventionRepository.findAll();
    }

    /**
     * {@code GET  /subvention/:numSub} : get the "numSub" Subvention.
     *
     * @param numSub the numSub of the Subvention to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Subvention, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/subvention/{numSub}")
    public ResponseEntity<Subvention> getSubvention(@PathVariable Long numSub) {
        log.debug("REST request to get Subvention : {}", numSub);
        Optional<Subvention> sub = subventionRepository.findById(numSub);
        return ResponseUtil.wrapOrNotFound(sub);
    }

    /**
     * {@code DELETE  /subvention/:numSub} : delete the "numSub" subvention.
     *
     * @param id the id of the subvention to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @DeleteMapping("/subvention/{numSub}")
    public ResponseEntity<Void> deleteSubvention(@PathVariable Long numSub) {
        log.debug("REST request to delete Subvention : {}", numSub);
        subventionRepository.deleteById(numSub);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                numSub.toString())).build();
    }
}
