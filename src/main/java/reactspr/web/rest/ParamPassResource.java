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
    @PostMapping("/paramPass")
    public ResponseEntity<ParamPass> createJob(@RequestBody ParamPass paramPass) throws URISyntaxException {
        log.debug("REST request to save paramPass : {}", paramPass);
        if (paramPass.getNumParam() != null) {
            throw new BadRequestAlertException("A new Param cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ParamPass result = paramPassRepository.save(paramPass);
        return ResponseEntity.created(new URI("/api/paramPass/" + result.getNumParam()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumParam().toString()))
            .body(result);
    }

    @PutMapping("/paramPass")
    public ResponseEntity<ParamPass> updateJob(@RequestBody ParamPass paramPass) throws URISyntaxException {
        log.debug("REST request to update paramPass : {}", paramPass);
        if (paramPass.getNumParam() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ParamPass result = paramPassRepository.save(paramPass);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        paramPass.getNumParam().toString()))
            .body(result);
    }

    @GetMapping("/paramPass")
    public List<ParamPass> getAllParam() {
        log.debug("REST request to get all ParamPass");
        return paramPassRepository.findAll();
    }


    @GetMapping("/paramPass/{numParam}")
    public ResponseEntity<ParamPass> getParam(@PathVariable Long numParam) {
        log.debug("REST request to get Job : {}", numParam);
        Optional<ParamPass> paramPass = paramPassRepository.findById(numParam);
        return ResponseUtil.wrapOrNotFound(paramPass);
    }

    @DeleteMapping("/paramPass/{numParam}")
    public ResponseEntity<Void> deleteParam(@PathVariable Long numParam) {
        log.debug("REST request to delete Param : {}", numParam);
        paramPassRepository.deleteById(numParam);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                numParam.toString())).build();
    }
    
}
