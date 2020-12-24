package reactspr.web.rest;
import reactspr.domain.SousFamille;
import reactspr.repository.SousFamilleRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.SousFamille}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SousFamilleResource {

    private final Logger log = LoggerFactory.getLogger(SousFamilleResource.class);

    private static final String ENTITY_NAME = "SousFamille";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SousFamilleRepository sousFamilleRepository;

    public SousFamilleResource(SousFamilleRepository sousFamilleRepository) {
        this.sousFamilleRepository = sousFamilleRepository;
    }

    /**
     * {@code POST  /ssfamille} : Create a new SousFamille.
     *
     */
    /**
     * {@code POST  /ssfamille} : Create a new SousFamille.
     *
     * @param ssfamille the Immo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new paramPass, or with status {@code 400 (Bad Request)} if
     *         the SousFamille has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/ssfamille")
    public ResponseEntity<SousFamille> createSousFamille(@RequestBody SousFamille sousFamille) throws URISyntaxException {
        log.debug("REST request to save paramPass : {}", sousFamille);
        if (sousFamille.getCsfam() != null) {
            throw new BadRequestAlertException("A new Param cannot already have an ID", ENTITY_NAME, "idexists");
        }
        SousFamille result = sousFamilleRepository.save(sousFamille);
        return ResponseEntity.created(new URI("/api/ssfamille/" + result.getCsfam()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCsfam()))
            .body(result);
    }
    
    /**
     * {@code PUT  /ssfamille} : Updates an existing SousFamille.
     *
     * @param paramPass the SousFamille to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated SousFamille, or with status {@code 400 (Bad Request)} if
     *         the SousFamille is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the SousFamille couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PutMapping("/ssfamille")
    public ResponseEntity<SousFamille> updateSousFamille(@RequestBody SousFamille sousFamille) throws URISyntaxException {
        log.debug("REST request to update paramPass : {}", sousFamille);
        if (sousFamille.getCsfam() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        SousFamille result = sousFamilleRepository.save(sousFamille);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        sousFamille.getCsfam()))
            .body(result);
    }
    
    /**
     * {@code GET  /ssfamille} : get all the SousFamille.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of SousFamille in body.
     */
    @GetMapping("/ssfamille")
    public List<SousFamille> getAllFam() {
        log.debug("REST request to get all ParamPass");
        return sousFamilleRepository.findAll();
    }


    /**
     * {@code GET  /ssfamille/:csfam} : get the "csfam" SousFamille.
     *
     * @param csfam the csfam of the SousFamille to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the SousFamille, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/ssfamille/{csfam}")
    public ResponseEntity<SousFamille> getFamille(@PathVariable String csfam) {
        log.debug("REST request to get Job : {}", csfam);
        Optional<SousFamille> ss = sousFamilleRepository.findById(csfam);
        return ResponseUtil.wrapOrNotFound(ss);
    }

    /**
     * {@code DELETE  /ssfamille/:csfam} : delete the "csfam" SousFamille.
     *
     * @param csfam the csfam of the SousFamille to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/ssfamille/{csfam}")
    public ResponseEntity<Void> deleteFamille(@PathVariable String csfam) {
        log.debug("REST request to delete Param : {}", csfam);
        sousFamilleRepository.deleteById(csfam);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                csfam)).build();
    }
}
