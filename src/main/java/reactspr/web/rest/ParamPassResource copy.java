package reactspr.web.rest;

import reactspr.domain.ParamPass;
import reactspr.repository.ParamPassRepository;
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
 * REST controller for managing {@link reactspr.domain.Job}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ParamPassResource {

    private final Logger log = LoggerFactory.getLogger(ParamPassResource.class);

    private static final String ENTITY_NAME = "ParamPass";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ParamPassRepository paramPassRepository;

    public ParamPassResource(ParamPassRepository paramPassRepository) {
        this.paramPassRepository = paramPassRepository;
    }

    /**
     * {@code POST  /paramPass} : Create a new paramPass.
     *
     */
    /**
     * {@code POST  /paramPass} : Create a new paramPass.
     *
     * @param paramPass the Immo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new paramPass, or with status {@code 400 (Bad Request)} if
     *         the paramPass has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/paramPass")
    public ResponseEntity<ParamPass> createParam(@RequestBody ParamPass paramPass) throws URISyntaxException {
        log.debug("REST request to save paramPass : {}", paramPass);
        if (paramPass.getNumNumbers() != null) {
            throw new BadRequestAlertException("A new Param cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ParamPass result = paramPassRepository.save(paramPass);
        return ResponseEntity.created(new URI("/api/paramPass/" + result.getNumNumbers()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumNumbers().toString()))
            .body(result);
    }
    
    /**
     * {@code PUT  /paramPass} : Updates an existing paramPass.
     *
     * @param paramPass the paramPass to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated paramPass, or with status {@code 400 (Bad Request)} if
     *         the paramPass is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the paramPass couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PutMapping("/paramPass")
    public ResponseEntity<ParamPass> updateParam(@RequestBody ParamPass paramPass) throws URISyntaxException {
        log.debug("REST request to update paramPass : {}", paramPass);
        if (paramPass.getNumNumbers() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ParamPass result = paramPassRepository.save(paramPass);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        paramPass.getNumNumbers().toString()))
            .body(result);
    }
    
    /**
     * {@code GET  /paramPass} : get all the paramPass.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of paramPass in body.
     */
    @GetMapping("/paramPass")
    public List<ParamPass> getAllParam() {
        log.debug("REST request to get all ParamPass");
        return paramPassRepository.findAll();
    }


    /**
     * {@code GET  /paramPass/:numNumbers} : get the "numNumbers" paramPass.
     *
     * @param numNumbers the numero of the paramPass to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the paramPass, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/paramPass/{numNumbers}")
    public ResponseEntity<ParamPass> getParam(@PathVariable Long numNumbers) {
        log.debug("REST request to get Job : {}", numNumbers);
        Optional<ParamPass> paramPass = paramPassRepository.findById(numNumbers);
        return ResponseUtil.wrapOrNotFound(paramPass);
    }

    /**
     * {@code DELETE  /paramPass/:numNumbers} : delete the "numNumbers" paramPass.
     *
     * @param numNumbers the numNumbers of the paramPass to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/paramPass/{numNumbers}")
    public ResponseEntity<Void> deleteParam(@PathVariable Long numNumbers) {
        log.debug("REST request to delete Param : {}", numNumbers);
        paramPassRepository.deleteById(numNumbers);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                numNumbers.toString())).build();
    }
    
}
